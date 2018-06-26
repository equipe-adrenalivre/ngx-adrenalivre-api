import { Author } from "../author";
import { File } from "../file";
import { Collection } from "../collection";
import { Model } from "../model";
import { VolumeRate } from "../rate";
import { VolumeVisit } from "../visit";
import { VolumeReading } from "./volume-reading";
import { VolumeSale } from "./volume-sale";

export class Volume extends Model {
    name?: string;

    coverFile?: File;

    desktopBackgroundFile?: File;

    mobileBackgroundFile?: File;

    androidAssetBundleFile?: File;

    iosAssetBundleFile?: File;

    storyFile?: File;

    collection?: Collection;

    synopsis?: string;

    duration?: number;

    creditsCost?: number;

    recommendationRate?: string;

    createdAt: string;

    updatedAt: string;

    authors: Author[] = [];

    position?: number;

    androidAdMobVideo?: string;

    androidAdMobImage?: string;

    iosAdMobVideo?: string;

    iosAdMobImage?: string;

    visibility: string;

    rates: VolumeRate[] = [];

    visits: VolumeVisit[] = [];

    readings: VolumeReading[] = [];

    readingsDaysAgo: number;

    sales: VolumeSale[] = [];

    salesDaysAgo: number;

    constructor(data: any = {}) {
        super(data);
        this.hydrate(data);
    }

    hydrate(data: any) {
        super.hydrate(data);

        if (!data) {
            return this;
        }

        if (data.desktopBackgroundFile) {
            if (this.desktopBackgroundFile instanceof File) {
                this.desktopBackgroundFile.hydrate(data.desktopBackgroundFile);
            } else {
                this.desktopBackgroundFile = new File(data.desktopBackgroundFile);
            }
        }

        if (data.mobileBackgroundFile) {
            if (this.mobileBackgroundFile instanceof File) {
                this.mobileBackgroundFile.hydrate(data.mobileBackgroundFile);
            } else {
                this.mobileBackgroundFile = new File(data.mobileBackgroundFile);
            }
        }

        if (data.coverFile) {
            if (this.coverFile instanceof File) {
                this.coverFile.hydrate(data.coverFile);
            } else {
                this.coverFile = new File(data.coverFile);
            }
        }

        if (data.androidAssetBundleFile) {
            if (this.androidAssetBundleFile instanceof File) {
                this.androidAssetBundleFile.hydrate(data.androidAssetBundleFile);
            } else {
                this.androidAssetBundleFile = new File(data.androidAssetBundleFile);
            }
        }

        if (data.iosAssetBundleFile) {
            if (this.iosAssetBundleFile instanceof File) {
                this.iosAssetBundleFile.hydrate(data.iosAssetBundleFile);
            } else {
                this.iosAssetBundleFile = new File(data.iosAssetBundleFile);
            }
        }

        if (data.storyFile) {
            if (this.storyFile instanceof File) {
                this.storyFile.hydrate(data.storyFile);
            } else {
                this.storyFile = new File(data.storyFile);
            }
        }

        if (data.collection) {
            if (this.collection instanceof Collection) {
                this.collection.hydrate(data.collection);
            } else {
                this.collection = new Collection(data.collection);
            }
        }

        if (data.authors) {
            this.authors = data.authors.map((authorData => new Author(authorData)));
        }

        if (data.rates) {
            this.rates = data.rates.map((rateDate => new VolumeRate(rateDate)));
        }

        if (data.visits) {
            this.visits = data.visits.map((visitDate => new VolumeVisit(visitDate)));
        }

        if (data.readings) {
            this.readings = data.readings.map((readingData => new VolumeReading(readingData)));
        }

        if (data.sales) {
            this.sales = data.sales.map((saleData => new VolumeSale(saleData)));
        }

        return this;
    }

    toForm(): object {
        let form: any = super.toForm();

        form.name = this.name;
        if (this.coverFile) {
            form.coverFile = this.coverFile.id;
        }
        if (this.collection) {
            form.collection = this.collection.id;
        }
        if (this.desktopBackgroundFile) {
            form.desktopBackgroundFile = this.desktopBackgroundFile.id;
        }
        if (this.mobileBackgroundFile) {
            form.mobileBackgroundFile = this.mobileBackgroundFile.id;
        }
        if (this.androidAssetBundleFile) {
            form.androidAssetBundleFile = this.androidAssetBundleFile.id;
        }
        if (this.iosAssetBundleFile) {
            form.iosAssetBundleFile = this.iosAssetBundleFile.id;
        }
        if (this.storyFile) {
            form.storyFile = this.storyFile.id;
        }
        form.synopsis = this.synopsis;
        form.duration = this.duration;
        form.creditsCost = this.creditsCost;
        form.authors = this.authors.map((author?: Author) => {
            if (author) {
                return author.id;
            }
        });
        if (this.position) {
            form.position = this.position;
        }
        form.androidAdMobVideo = this.androidAdMobVideo;
        form.androidAdMobImage = this.androidAdMobImage;
        form.iosAdMobVideo = this.iosAdMobVideo;
        form.iosAdMobImage = this.iosAdMobImage;
        form.visibility = this.visibility;

        return form;
    }

    get displayableName(): string {
        return (this.name ? this.name : this.id) + ' ' + (this.collection && this.collection.name ? '(' + this.collection.name + ')' : '(' + this.collection.id + ')');
    }
}
