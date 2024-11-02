const input = ['1100', '1110', '0110', '0001']

// Logic:
// Relations are transitive which means that each DFS attempt should occur
// on anything that is related, e.g. if 1 is related to 2, and 2 is related to 3,
// the group would become {1,2,3}. This means we can DFS until there's no more relations.
// We store if it's part of a group by adding it to a visited set. To execute the DFS
// recursively, we need to check it for each person, but only if it's unvisited.

const giftingGroups = (relations) => {
    let n = relations.length;
    const visited = new Set();

    const dfs = (person) => {
        console.log('dfs attempt', person)
        visited.add(person);
        for (let friend = 0; friend < n; friend++) {
            if (relations[person][friend] === '1' && !visited.has(friend)) {
                dfs(friend);
            }
        }
    }
    let groups = 0;
    for (let person = 0; person < n; person++) {
        console.log(person)
        if (!visited.has(person)) {
            dfs(person);
            groups += 1;
        }
    }
    return groups;
}

console.log(giftingGroups(input));

// Time complexity should be O(n^2), this is if you visit every single connection.
// Space complexity would be the size of the set, should be O(n)