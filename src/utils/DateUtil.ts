import dayjs from "dayjs";

export class DateUtil {
  public static getDateTime(timestamp: string | Date): string {
    return dayjs(timestamp).format("D-MM-YY (H:m A)");
  }
}
