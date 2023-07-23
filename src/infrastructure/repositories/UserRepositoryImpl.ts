import { AppDataSource } from "../../db";
import { UserDto } from "../../domain/dto/UserDto";
import { User } from "../../domain/models/user.model";
import { UserRepositoryInterface } from "../../domain/repositories/user.repository.interface";
import { Repository } from "typeorm";

export class UserRepositoryImpl implements UserRepositoryInterface {
  private readonly db: Repository<User>;

  constructor() {
    this.db = AppDataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.db.find();

    if (!allUsers) {
      throw new Error("No users found");
    }

    return allUsers;
  }
  async createUser(user: UserDto): Promise<User> {
    const newUser = new User();
    newUser.login = user.login;
    newUser.id = user.id;
    newUser.node_id = user.nodeID;
    newUser.avatar_url = user.avatarURL;
    newUser.gravatar_id = user.gravatarID;
    newUser.url = user.url;
    newUser.html_url = user.htmlURL;
    newUser.followers_url = user.followersURL;
    newUser.following_url = user.followingURL;
    newUser.gists_url = user.gistsURL;
    newUser.starred_url = user.starredURL;
    newUser.subscriptions_url = user.subscriptionsURL;
    newUser.organizations_url = user.organizationsURL;
    newUser.repos_url = user.reposURL;
    newUser.events_url = user.eventsURL;
    newUser.received_events_url = user.receivedEventsURL;
    newUser.type = user.type;
    newUser.site_admin = user.siteAdmin;
    newUser.name = user.name;
    newUser.company = user.company || "";
    newUser.blog = user.blog || "";
    newUser.location = user.location || "";
    newUser.email = user.email || "";
    newUser.hireable = user.hireable || false;
    newUser.bio = user.bio || "";
    newUser.twitter_username = user.twitterUsername || "";
    newUser.public_repos = user.publicRepos;
    newUser.public_gists = user.publicGists;
    newUser.followers = user.followers;
    newUser.following = user.following;
    newUser.created_at = new Date(user.createdAt);
    newUser.updated_at = new Date(user.updatedAt);
    newUser.created_at_db = new Date();
    newUser.updated_at_db = new Date();

    return await this.db.save(newUser);
  }
}
