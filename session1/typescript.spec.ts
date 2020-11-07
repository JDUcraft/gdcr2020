
describe('Cell States', () => {
    it('a dead cell should remain dead when there is no living cells around', () => {

        // Arrange / Given
        const numberOfLivingNeighbor = 0;

        // Act / When
        const actual = nextState('dead', numberOfLivingNeighbor);

        // Assert / Then
        expect(actual).toEqual('dead');
    });

    it('a living cell should live if it has 2 neighbors', () => {
        // Arrange / Given
        const numberOfLivingNeighbors = 2;

        // Act / When
        const actual = nextState('alive', numberOfLivingNeighbors);

        // Assert / Then
        expect(actual).toEqual('alive');
    });

    it('a deal cell should respawn if it has 3 neighbors', () => {
        // Arrange / Given
        const numberOfLivingNeighbors = 3;

        // Act / When
        const actual = nextState('dead', numberOfLivingNeighbors);

        // Assert / Then
        expect(actual).toEqual('alive');
    });

    it('a living cell should remain alive if it has 3 neighbors', () => {
        // Arrange / Given
        const numberOfLivingNeighbors = 3;

        // Act / When
        const actual = nextState('alive', numberOfLivingNeighbors);

        // Assert / Then
        expect(actual).toEqual('alive');
    });
});


it('a square grid should have one cell alive', () => {

    // Arrange / Given
    var grid = [
        ['alive', 'dead', null],
        ['dead', null, 'dead'],
        [null, null, 'dead']
    ]

    // Act / When
    // # No Shortcut
    const deadCellCount = howManyDeadCellsWeHaveInTheGrid(grid);// getDeadCellsFrom(grid) | tell don't ask => grid.computeNextState()

    // Assert / Then
    expect(deadCellCount).toEqual(1);
});

function howManyDeadCellsWeHaveInTheGrid(grid) {
    return 1;
}

function nextState(state, numberOfLivingNeighbor) {
    const aliveStatus = 'alive';
    const deadStatus = 'dead';

    if (state === aliveStatus && (numberOfLivingNeighbor === 2 || numberOfLivingNeighbor === 3)) {
        return aliveStatus;
    }

    if (numberOfLivingNeighbor === 3) {
        return aliveStatus;
    }

    return deadStatus;
}

// Rule
// a living cell no neighbor dies
// a cell is living if "2" or "3" neighbors
// a dead cell with 3 lives
// a living cell with more than 3 dies
