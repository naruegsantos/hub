import { Injectable } from '@nestjs/common';
import { CreateReleaseDto } from './dto/create-release.dto';
import { UpdateReleaseDto } from './dto/update-release.dto';
import { marked } from 'marked';

@Injectable()
export class ReleaseService {
  create(createReleaseDto: CreateReleaseDto) {
    return 'This action adds a new release';
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
        content: `
# My To-Do List

- [ ] Write documentation  
- [x] Set up CI/CD  
- [ ] Deploy to production
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
    return `This action returns a #${id} release`;
  }

  update(id: number, updateReleaseDto: UpdateReleaseDto) {
    return `This action updates a #${id} release`;
  }

  remove(id: number) {
    return `This action removes a #${id} release`;
  }
}
