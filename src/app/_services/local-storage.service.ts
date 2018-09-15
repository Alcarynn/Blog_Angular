import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { User } from '../classes';

const STORAGE_KEY = 'local_user';

@Injectable()
export class LocalStorageService {

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }
     
    public storeOnLocalStorage(userLogin: User): void { 
        this.storage.set(STORAGE_KEY, userLogin);
        console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    }
}