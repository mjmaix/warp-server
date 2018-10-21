import Class from '../class';
import Key from '../keys/key';

export default class User extends Class {

    @Key username: string;
    @Key email: string;
    @Key password: string;
    @Key role: string;

}