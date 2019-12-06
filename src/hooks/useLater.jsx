import { useLocalStorage } from './useLocalSotrage';

export const useLater = (data) => {
    const [gameData, setGameData] = useLocalStorage('gameOn', data);

    return [gameData, setGameData];
}