export interface QuestionTimerInterface {
    timeout: number;
    onTimeout: () => void;
}