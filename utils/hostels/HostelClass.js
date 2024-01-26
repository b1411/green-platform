export class HostelInfo {
    constructor(data) {
        this.name = data.get("name");
        this.address = data.get("address");
        this.price = data.get("price");
        this.square = data.get("square");
        this.description = data.get("description");
        this.id = data.id;
        this.data = data;
        this.images = [];
    }
    async getImages() {
        (await this.data.relation("images").query().find()).map((image) => {
            this.images.push(image.get("hostelImage").url());
        });
    }
}
