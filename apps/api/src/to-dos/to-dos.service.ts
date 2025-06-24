import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';

@Injectable()
export class ToDosService {
  create(createToDoDto: CreateToDoDto) {
    return 'This action adds a new toDo';
  }

  findAll() {
    const list = [
      {
        id:1,
        status:"ongoin",
        title:"Criar um criador de portifólio",
        created_at:"23/06/2025",
        completed_at:"",
        content:`A ideia é que seja um espaço para criação de portifólio, voltado para:
- [ ] Artistas
- Dev's`,
        bedges:[
          {
            title:"Mariana",
            variant:"outline"
          }
        ]
      }
    ]
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} toDo`;
  }

  update(id: number, updateToDoDto: UpdateToDoDto) {
    return `This action updates a #${id} toDo`;
  }

  remove(id: number) {
    return `This action removes a #${id} toDo`;
  }
}
