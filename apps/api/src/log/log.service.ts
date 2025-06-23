import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { marked } from 'marked';

@Injectable()
export class LogService {
  create(createLogDto: CreateLogDto) {
    return 'This action adds a new log';
  }

  findAll() {
    const mock = [
      {
        id:"1",
        date:"22/06/2025",
        status:"completed",
        version:"1.0.0",
        name:"Iniciando",
        content: `**Todo** projeto começa na primeira versão.
        `,
        bedges:[
          {
            title: "hot!",
            variant:"destructive"
          },
          {
            title: "stable",
            variant:"secondary"
          },
        ]
      },
      {
        id:"2",
        date:"22/06/2025",
        status:"uncompleted",
        version:"1.0.1",
        name:"Primeiros passos",
        content: `Depois de um bom começo com uma base sólida e moderna, é hora de sairmos do rascunho
        e rumarmos algo mais completo.

        O que vai entrar nessa versão:
        - [ ] Adição de novas versões
        - [ ] Dark mode
        `,
        bedges:[
          {
            title: "hot!",
            variant:"destructive"
          },
          {
            title: "stable",
            variant:"secondary"
          },
        ]
      },
    ]
    return mock;
  }

  findOne(id: number) {
    return `This action returns a #${id} log`;
  }

  update(id: number, updateLogDto: UpdateLogDto) {
    return `This action updates a #${id} log`;
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
