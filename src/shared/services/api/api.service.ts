import axios, {AxiosInstance, AxiosResponse} from 'axios';

import { ContentTagEnum } from "./model/ContentTagEnum";
import { IApiService } from "./model/IApiService";
import { IApiResponse } from './model/IApiResponse';
import { IContent } from './model/IContent';
import { II18n } from './model/II18n';
import { IDocument } from './model/IDocument';

enum SortDirectionEnum {
  ASC = "ASC",
  DESC = "DESC",
  RAND = "RAND"
}

type QueryStringValue = number | string | string[] | undefined;
interface IHttpGetParams extends Record<string, QueryStringValue> {
  fields?: string[];
  sort?: string;
  limit?: number;
  direction?: SortDirectionEnum;
}

class ApiService implements IApiService {

  private lang = "pt";
  private website = "jfoia";
  private http: AxiosInstance = axios.create({
    baseURL: "https://www.api.tncreate.pt/v1.0"
  });

  public getI18n(): Promise<II18n[]> {
    return this.httpGet("i18n");
  }

  public getContent(tag: ContentTagEnum): Promise<IContent> {
    return this.httpGet(`content/${tag}`);
  }

  public getNews(): Promise<IContent[]> {
    return this.httpGet("content_news", {
      sort: "order",
      direction: SortDirectionEnum.ASC,
    });
  }

  public getPlacesToVisit(): Promise<IContent[]> {
    return this.httpGet("content_placesToVisit", {
      sort: "order",
      direction: SortDirectionEnum.ASC,
    });
  }

  public getWhereToEat(): Promise<IContent[]> {
    return this.httpGet("content_whereToEat", {
      sort: "order",
      direction: SortDirectionEnum.ASC,
    });
  }

  public getInstitutions(): Promise<IContent[]> {
    return this.httpGet("content_institutions", {
      sort: "order",
      direction: SortDirectionEnum.ASC,
    });
  }

  public getNotices(): Promise<IContent[]> {
    return this.httpGet("content_notices", {
      sort: "order",
      direction: SortDirectionEnum.ASC,
    });
  }

  public getEvents(): Promise<IContent[]> {
    return this.httpGet("content_events", {
      sort: "order",
      direction: SortDirectionEnum.ASC,
    });
  }

  public getTeam(): Promise<IContent[]> {
    return this.httpGet("content_team", {
      sort: "order",
      direction: SortDirectionEnum.ASC,
    });
  }

  public getDocuments(): Promise<IDocument[]> {
    return this.httpGet("content_documents", {
      sort: "order",
      fields: ["name", "idsubcat"],
      direction: SortDirectionEnum.ASC,
    });
  }

  public getRequirements(): Promise<IDocument[]> {
    return this.httpGet("content_requirements", {
      sort: "order",
      fields: ["name", "idsubcat"],
      direction: SortDirectionEnum.ASC,
    });
  }

  private async httpGet<T>(endpoint: string, params?: IHttpGetParams): Promise<T> {
    return await this.http.get(`${this.lang}/${this.website}/${endpoint+this.getQueryString(params)}`)
      .then((res: AxiosResponse) => res.data)
      .then((res: IApiResponse) => res.data) as T;
  }

  private getQueryString(params?: IHttpGetParams): string {
    const keys: string[] = (params && Object.keys(params)) || [];
    if (keys.length === 0) return "";

    const queryString: string[] = keys.reduce((acc: string[], key: string) => {
      const param: QueryStringValue = params![key];
      const value: string = param!.constructor === Array ? param.join() : param!.toString();

      acc.push(`${key}=${value}`);

      return acc;
    }, []);

    return `?${queryString.join("&")}`;
  }

}

const apiService = new ApiService();
export default apiService;
