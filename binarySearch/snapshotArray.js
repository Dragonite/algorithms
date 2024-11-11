class SnapshotArray {
    constructor(length) {
        this.history = Array(length).fill(undefined).map(() => [[0, 0]]);
        this.snapId = 0;
    }

    set(index, value) {
        const timeline = this.history[index];
        timeline.push([this.snapId, value]);
    }

    snap() {
        return this.snapId++;
    }

    get(index, snapId) {
        const isValid = (snapshot) => {
            const [snapshotId] = snapshot;
            // We want snapshots less than or equal to our target snapId
            return snapshotId <= snapId;
        }
        const timeline = this.history[index];
        let left = 0;
        let right = timeline.length - 1;
        let boundaryIndex = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (isValid(timeline[mid])) {
                boundaryIndex = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        console.log(boundaryIndex);
        return boundaryIndex;
    }
}

const snapshots = new SnapshotArray(3);
snapshots.set(0,5);
snapshots.snap();
snapshots.set(0,6);
snapshots.snap();
snapshots.set(0,6);
snapshots.get(0,1);