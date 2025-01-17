import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from './User';
import ResourceSale from './ResourceSale';

@Entity('resources')
class Resource {
  @PrimaryGeneratedColumn('uuid')
  id_resource: string;

  @Column({ unique: true })
  name: string;

  @Column()
  unit_cost: number;

  @Column()
  units: number;

  @Column()
  description: string;

  @Column()
  createdOn: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => User, (user: User) => user.resources)
  user: string;

  @OneToMany(
    () => ResourceSale,
    (resources_sales: ResourceSale) => resources_sales.resource
  )
  resources_sales!: ResourceSale[];
}

export default Resource;
