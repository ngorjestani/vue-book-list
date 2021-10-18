export default function ItemCollection() {
    this.__proto__ = [];
    this.length = 0;

    this.readBooks = function() {
        return this.filter((item) => {
            return item.isRead;
        });
    }
}