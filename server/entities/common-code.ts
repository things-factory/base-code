import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { CommonCodeDetail } from './common-code-detail'

@Entity()
@Index('ix_common_code_0', (commonCode: CommonCode) => [commonCode.domain, commonCode.name], { unique: true })
@Index('ix_common_code_1', (commonCode: CommonCode) => [commonCode.domain, commonCode.bundle])
export class CommonCode {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column()
  bundle: string

  @OneToMany(type => CommonCodeDetail, commonCodeDetail => commonCodeDetail.parent)
  details: CommonCodeDetail[]

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
