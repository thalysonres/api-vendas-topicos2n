import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('automobiles')
class Automobile {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('int')
  ano: number

  @Column()
  modelo: string

  @Column()
  marca: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Automobile
