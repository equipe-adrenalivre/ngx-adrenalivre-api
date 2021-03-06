import { Model } from "../model";
import { Volume } from "./volume";
import { User } from "../user/user";

export class VolumeReading extends Model {
    volume: Volume;

    user: User;

    readAt: Date;

    constructor(data: any = {}) {
        super(data);
        this.hydrate(data);
    }

    hydrate(data: any) {
        super.hydrate(data);

        if (data.volume) {
            if (this.volume instanceof Volume) {
                this.volume.hydrate(data.volume);
            } else {
                this.volume = new Volume(data.volume);
            }
        }

        if (data.user) {
            if (this.user instanceof User) {
                this.user.hydrate(data.user);
            } else {
                this.user = new User(data.user);
            }
        }

        this.readAt = new Date(data.readAt);

        return this;
    }
}