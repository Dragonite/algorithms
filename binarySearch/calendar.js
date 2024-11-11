class Calendar {
    constructor() {
        this.bookings = [[10, 20]];
    }
    
    book(start, finish) {
        if (!start || !finish) return -1;
        if (this.bookings.length === 0) {
            this.bookings.push([start, finish]);
            return 0;
        }
        
        let left = 0;
        let right = this.bookings.length - 1;
        let insertIndex = this.bookings.length;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const [existingStart, existingEnd] = this.bookings[mid];
            
            // Check for overlap
            if (start < existingEnd && finish > existingStart) {
                return -1; // Overlap found
            }
            
            if (start >= existingEnd) {
                // Our booking goes after this one
                left = mid + 1;
            } else {
                // Our booking goes before this one
                insertIndex = mid;
                right = mid - 1;
            }
        }
        
        // Insert the new booking
        this.bookings.splice(insertIndex, 0, [start, finish]);
        return insertIndex;
    }
}

// Test cases
const calendar = new Calendar();
console.log(calendar.book(20, 30)); // Should return 1
console.log(calendar.bookings); // Should show [[10, 20], [20, 30]]