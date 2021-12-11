export type Action<T> =
  | { type: "INIT" }
  | { type: "SUCCESS"; payload: T }
  | { type: "FAIL" }
  | { type: "LOADER"; value: boolean };

export interface ApiState<T> {
  loading: boolean;
  data: T | null;
}
