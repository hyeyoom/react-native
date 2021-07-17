import AsyncStorage from '@react-native-async-storage/async-storage'

export enum StorageKey {
    USER_INFO = "USER_INFO"
}

interface StorageUtil {

    /**
     * @param key
     * @param callback
     */
    get(key: StorageKey, callback?: (error: Error) => void): Promise<any>

    set(key: StorageKey, payload: any): Promise<void>
}

class AsyncStorageUtil implements StorageUtil {
    get(key: StorageKey, callback?: (error: Error) => void): Promise<any> {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result != null ? JSON.parse(result as string) : null)
            })
        })
    }

    set(key: StorageKey, payload: any): Promise<void> {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, JSON.stringify(payload), error => {
                if (error) {
                    reject(error)
                }
                resolve()
            })
        })
    }
}

const asyncStorageUtil = new AsyncStorageUtil()

export default asyncStorageUtil

