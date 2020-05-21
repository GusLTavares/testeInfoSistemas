const assert = require('chai').assert;
const router = express.Router();
const veiculos = require('../veiculos');

describe(veiculos, router) {

        it('Should return 200', router){
            assert.equal(veiculos.router.get(), 200)
        }

}
