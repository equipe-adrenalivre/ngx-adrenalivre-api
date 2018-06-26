import { Author } from '../author';
import { Visit } from "./visit";

export class AuthorVisit extends Visit {
    discriminator: string = 'author';

    author: Author;

    hydrate(data: any) {
        if (!data) {
            return this;
        }

        if (data.author) {
            if (this.author instanceof Author) {
                this.author.hydrate(data.author);
            } else {
                this.author = new Author(data.author);
            }
        }

        return super.hydrate(data);
    }

    toForm(): object {
        let form: any = super.toForm();

        if (this.author) {
            form.author = this.author.id;
        }

        return form;
    }
}