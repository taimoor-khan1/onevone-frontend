import axios from "axios";
import { CONSTANTS } from "../../Constants";

export const LoginService = async ( data ) => {

    const onSuccess = ( { data } ) => {
        return data;
    };

    const onFailure = error => {
        throw error;
    };

    return await axios
        .post( CONSTANTS.BASE_URL + CONSTANTS.LOGIN, data )
        .then( onSuccess )
        .catch( onFailure );
};