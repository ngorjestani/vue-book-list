export default function ItemCollection() {
    this.__proto__ = [];

    this.readBooks = function() {
        return this.filter((item) => {
            return item.isRead;
        });
    }
}