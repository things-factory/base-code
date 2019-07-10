import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { CommonCode } from './common-code'

@Entity()
@Index(
  'ix_common_code_detail_0',
  (commonCodeDetail: CommonCodeDetail) => [commonCodeDetail.domain, commonCodeDetail.parent, commonCodeDetail.name],
  { unique: true }
)
@Index('ix_common_code_detail_1', (commonCodeDetail: CommonCodeDetail) => [
  commonCodeDetail.parent,
  commonCodeDetail.rank
])
export class CommonCodeDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @ManyToOne(type => CommonCode, commonCode => commonCode.details)
  parent: CommonCode

  @Column('text')
  description: string

  @Column('int')
  rank: number

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
