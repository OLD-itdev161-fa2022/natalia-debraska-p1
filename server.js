import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';

//Initialize express application
const app = express();

//Connect database
connectDatabase();

//Configure Middleware
app.use(express.json({ extended: false }));

//API endpoints
/**
 * @route GET /
 * @desc Test endpoint
 */
app.get('/', (req, res) =>
    res.send('Project 1 - http get request sent to root api endpoint')
);

/**
 * @route POST api/users
 * @desc Register user
 */
app.post(
    '/api/users',
    [
        check('username', 'Please enter your username')
        .not()
        .isEmpty(),
        check('password', 'Please enter a password with 5 or more characters').isLength({min: 5 }),
        check('birthday', 'Please enter your birthday in the format MMDDYY').isLength({ equal: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            return res.send(req.body);
        }
    }
);

//Connection listener
app.listen(3000, () => console.log('Project 1 - Express server running on port 3000'));