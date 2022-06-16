
class Ship {
    constructor(countPart) {
        this.countPart = countPart;
        this.countShotPart = 0;
        this.isSunk = false;
    }
}

class GameBlock {
    constructor(ship, isHeader = false, caption = '') {
        this.ship = ship;
        this.isHeader = isHeader;
        this.isShot = false;
        this.caption = caption;
    }
}

class GamePlayer {
    constructor(name) {
        this.name = name;

        this.mShip4 = [new Ship(4)];
        this.mShip3 = [new Ship(3), new Ship(3)];
        this.mShip2 = [new Ship(2), new Ship(2), new Ship(2)];
        this.mShip1 = [new Ship(1), new Ship(1), new Ship(1), new Ship(1)];

        this.mArea = [];
    }

    isHeader(str) {
        if (str.length > 0 && str.length < 3) {
            return true;
        }
        return false;
    }

    isVoidBlock(str) {
        if (str.length === 0) {
            return true;
        }
        return false;
    }

    setArea(mAreaScheme) {
        this.mArea = mAreaScheme.map((e) => {
            return e.map((ee) => {
                if (this.isHeader(ee)) {
                    return new GameBlock(null, true, ee === 'X' ? '' : ee);
                } else {
                    if (this.isVoidBlock(ee)) {
                        return new GameBlock(null, false);
                    } else {
                        return new GameBlock(this[`mShip${ee[0]}`][ee[2] - 1]);
                    }
                }
            });
        });
    }
}

export const getPlayerObject = () => {

    let mAreaScheme = [
        ['X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        ['1', '2.1', '2.1', '', '3.1', '', '', '4.1', '4.1', '4.1', '4.1'],
        ['2', '', '', '', '3.1', '', '', '', '', '', ''],
        ['3', '', '', '', '3.1', '', '', '', '', '', '2.2'],
        ['4', '', '3.2', '', '', '', '', '', '', '', '2.2'],
        ['5', '', '3.2', '', '', '', '', '1.1.1', '', '', ''],
        ['6', '', '3.2', '', '', '', '', '', '', '', ''],
        ['7', '', '', '', '', '', '', '', '', '', ''],
        ['8', '', '', '', '1.3', '', '1.2', '', '', '2.3', ''],
        ['9', '1.4', '', '', '', '', '', '', '', '2.3', ''],
        ['10', '', '', '', '', '', '', '', '', '', '']
    ];

    let Player = new GamePlayer("Andrii");
    Player.setArea(mAreaScheme);

    return Player;

}