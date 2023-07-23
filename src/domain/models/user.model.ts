import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user!: number;

  @Column()
  login!: string;

  @Column()
  id!: number;

  @Column()
  node_id!: string;

  @Column()
  avatar_url!: string;

  @Column()
  gravatar_id!: string;

  @Column()
  url!: string;

  @Column()
  html_url!: string;

  @Column()
  followers_url!: string;

  @Column()
  following_url!: string;

  @Column()
  gists_url!: string;

  @Column()
  starred_url!: string;

  @Column()
  subscriptions_url!: string;

  @Column()
  organizations_url!: string;

  @Column()
  repos_url!: string;

  @Column()
  events_url!: string;

  @Column()
  received_events_url!: string;

  @Column()
  type!: string;

  @Column()
  site_admin!: boolean;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  company?: string;

  @Column({ nullable: true })
  blog!: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  hireable?: boolean;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  twitter_username?: string;

  @Column()
  public_repos!: number;

  @Column()
  public_gists!: number;

  @Column()
  followers!: number;

  @Column()
  following!: number;

  @Column()
  created_at!: Date;

  @Column()
  updated_at!: Date;

  @CreateDateColumn()
  created_at_db!: Date;

  @UpdateDateColumn()
  updated_at_db!: Date;
}
