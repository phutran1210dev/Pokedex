import {baseUrl} from 'src/configs';
import {Request} from 'src/utils/request';

export const ApiRequest = Request.create({
  endpoint: baseUrl,
});
