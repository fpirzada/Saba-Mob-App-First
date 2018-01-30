import {IService} from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SpinnerDialog } from 'ionic-native';
import { AppSettings } from './app-settings'

@Injectable()
export class ImageGalleryService implements IService {

    constructor(public af: AngularFireDatabase) {}

    getId = ():string => 'imageGallery';

    getTitle = ():string => 'Image Gallery';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "Full gallery 1", "theme"  : "layout1"},
        {"title" : "Thumb grid", "theme"  : "subcategory"},
        {"title" : "Full gallery 2", "theme"  : "layout3"}
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return this[
                'getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)
      ]();
    };

    getDataForLayout1 = (): any => {
          return {
            items: [
                {
                    id: 1,
                    title: 'Brogan',
                    image: 'assets/images/gallery/brogan/0.jpg',
                    items: [
                        {
                            id: 1,
                            image: 'assets/images/gallery/brogan/14.jpg'
                        },
                        {
                            id: 2,
                            image: 'assets/images/gallery/brogan/2.jpg'
                        },
                        {
                            id: 3,
                            image: 'assets/images/gallery/brogan/6.jpg'
                        },
                        {
                            id: 4,
                            image: 'assets/images/gallery/brogan/4.jpg'
                        },
                        {
                            id: 5,
                            image: 'assets/images/gallery/brogan/15.jpg'
                        },
                        {
                            id: 6,
                            image: 'assets/images/gallery/brogan/6.jpg'
                        },
                        {
                            id: 7,
                            image: 'assets/images/gallery/brogan/7.jpg'
                        },
                        {
                            id: 8,
                            image: 'assets/images/gallery/brogan/13.jpg'
                        },
                        {
                            id: 9,
                            image: 'assets/images/gallery/brogan/9.jpg'
                        },
                        {
                            id: 10,
                            image: 'assets/images/gallery/brogan/10.jpg'
                        },
                        {
                            id: 11,
                            image: 'assets/images/gallery/brogan/11.jpg'
                        },
                        {
                            id: 12,
                            image: 'assets/images/gallery/brogan/12.jpg'
                        },
                        {
                            id: 13,
                            image: 'assets/images/gallery/brogan/13.jpg'
                        },
                        {
                            id: 14,
                            image: 'assets/images/gallery/brogan/7.jpg'
                        },
                        {
                            id: 15,
                            image: 'assets/images/gallery/brogan/5.jpg'
                        },
                        {
                            id: 16,
                            image: 'assets/images/gallery/brogan/16.jpg'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Rehrersburg',
                    image: 'assets/images/gallery/brogan/1.jpg',
                    items: [
                        {
                            id: 1,
                            image: 'assets/images/gallery/brogan/2.jpg'
                        },
                        {
                            id: 2,
                            image: 'assets/images/gallery/brogan/5.jpg'
                        },
                        {
                            id: 3,
                            image: 'assets/images/gallery/brogan/6.jpg'
                        },
                        {
                            id: 4,
                            image: 'assets/images/gallery/brogan/7.jpg'
                        },
                        {
                            id: 5,
                            image: 'assets/images/gallery/brogan/8.jpg'
                        },
                        {
                            id: 6,
                            image: 'assets/images/gallery/brogan/14.jpg'
                        },
                        {
                            id: 7,
                            image: 'assets/images/gallery/brogan/3.jpg'
                        },
                        {
                            id: 8,
                            image: 'assets/images/gallery/brogan/4.jpg'
                        },
                        {
                            id: 9,
                            image: 'assets/images/gallery/brogan/9.jpg'
                        },
                        {
                            id: 10,
                            image: 'assets/images/gallery/brogan/10.jpg'
                        },
                        {
                            id: 11,
                            image: 'assets/images/gallery/brogan/11.jpg'
                        },
                        {
                            id: 12,
                            image: 'assets/images/gallery/brogan/12.jpg'
                        },
                        {
                            id: 13,
                            image: 'assets/images/gallery/brogan/2.jpg'
                        },
                        {
                            id: 14,
                            image: 'assets/images/gallery/brogan/9.jpg'
                        },
                        {
                            id: 15,
                            image: 'assets/images/gallery/brogan/15.jpg'
                        },
                        {
                            id: 16,
                            image: 'assets/images/gallery/brogan/0.jpg'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Durham',
                    image: 'assets/images/gallery/brogan/18.jpg',
                    items: [
                      {
                          id: 1,
                          image: 'assets/images/gallery/brogan/7.jpg'
                      },
                      {
                          id: 2,
                          image: 'assets/images/gallery/brogan/8.jpg'
                      },
                      {
                          id: 3,
                          image: 'assets/images/gallery/brogan/9.jpg'
                      },
                      {
                          id: 4,
                          image: 'assets/images/gallery/brogan/10.jpg'
                      },
                      {
                          id: 5,
                          image: 'assets/images/gallery/brogan/11.jpg'
                      },
                      {
                          id: 6,
                          image: 'assets/images/gallery/brogan/14.jpg'
                      },
                      {
                          id: 7,
                          image: 'assets/images/gallery/brogan/3.jpg'
                      },
                      {
                          id: 8,
                          image: 'assets/images/gallery/brogan/4.jpg'
                      },
                      {
                          id: 9,
                          image: 'assets/images/gallery/brogan/9.jpg'
                      },
                      {
                          id: 10,
                          image: 'assets/images/gallery/brogan/10.jpg'
                      },
                      {
                          id: 11,
                          image: 'assets/images/gallery/brogan/11.jpg'
                      },
                      {
                          id: 12,
                          image: 'assets/images/gallery/brogan/12.jpg'
                      },
                      {
                          id: 13,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 14,
                          image: 'assets/images/gallery/brogan/19.jpg'
                      },
                      {
                          id: 15,
                          image: 'assets/images/gallery/brogan/18.jpg'
                      }
                    ]
                },
                {
                    id: 4,
                    title: 'Callaghan',
                    image: 'assets/images/gallery/brogan/20.jpg',
                    items: [
                      {
                          id: 1,
                          image: 'assets/images/gallery/brogan/10.jpg'
                      },
                      {
                          id: 2,
                          image: 'assets/images/gallery/brogan/11.jpg'
                      },
                      {
                          id: 3,
                          image: 'assets/images/gallery/brogan/12.jpg'
                      },
                      {
                          id: 4,
                          image: 'assets/images/gallery/brogan/13.jpg'
                      },
                      {
                          id: 5,
                          image: 'assets/images/gallery/brogan/14.jpg'
                      },
                      {
                          id: 6,
                          image: 'assets/images/gallery/brogan/15.jpg'
                      },
                      {
                          id: 7,
                          image: 'assets/images/gallery/brogan/16.jpg'
                      },
                      {
                          id: 8,
                          image: 'assets/images/gallery/brogan/17.jpg'
                      },
                      {
                          id: 9,
                          image: 'assets/images/gallery/brogan/19.jpg'
                      },
                      {
                          id: 10,
                          image: 'assets/images/gallery/brogan/18.jpg'
                      },
                      {
                          id: 11,
                          image: 'assets/images/gallery/brogan/1.jpg'
                      },
                      {
                          id: 12,
                          image: 'assets/images/gallery/brogan/3.jpg'
                      },
                      {
                          id: 13,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 14,
                          image: 'assets/images/gallery/brogan/4.jpg'
                      },
                      {
                          id: 15,
                          image: 'assets/images/gallery/brogan/5.jpg'
                      }
                    ]
                },
                {
                    id: 5,
                    title: 'Manitou',
                    image: 'assets/images/gallery/brogan/17.jpg',
                    items: [
                      {
                          id: 1,
                          image: 'assets/images/gallery/brogan/1.jpg'
                      },
                      {
                          id: 2,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 3,
                          image: 'assets/images/gallery/brogan/12.jpg'
                      },
                      {
                          id: 4,
                          image: 'assets/images/gallery/brogan/13.jpg'
                      },
                      {
                          id: 5,
                          image: 'assets/images/gallery/brogan/16.jpg'
                      },
                      {
                          id: 6,
                          image: 'assets/images/gallery/brogan/15.jpg'
                      },
                      {
                          id: 7,
                          image: 'assets/images/gallery/brogan/20.jpg'
                      },
                      {
                          id: 8,
                          image: 'assets/images/gallery/brogan/17.jpg'
                      },
                      {
                          id: 9,
                          image: 'assets/images/gallery/brogan/19.jpg'
                      },
                      {
                          id: 10,
                          image: 'assets/images/gallery/brogan/18.jpg'
                      },
                      {
                          id: 11,
                          image: 'assets/images/gallery/brogan/10.jpg'
                      },
                      {
                          id: 12,
                          image: 'assets/images/gallery/brogan/3.jpg'
                      },
                      {
                          id: 13,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 14,
                          image: 'assets/images/gallery/brogan/4.jpg'
                      },
                      {
                          id: 15,
                          image: 'assets/images/gallery/brogan/5.jpg'
                      }
                    ]
                },
                {
                    id: 6,
                    title: 'Weedville',
                    image: 'assets/images/gallery/brogan/3.jpg',
                    favorite: true,
                    items: [
                      {
                          id: 1,
                          image: 'assets/images/gallery/brogan/20.jpg'
                      },
                      {
                          id: 2,
                          image: 'assets/images/gallery/brogan/19.jpg'
                      },
                      {
                          id: 3,
                          image: 'assets/images/gallery/brogan/12.jpg'
                      },
                      {
                          id: 4,
                          image: 'assets/images/gallery/brogan/13.jpg'
                      },
                      {
                          id: 5,
                          image: 'assets/images/gallery/brogan/16.jpg'
                      },
                      {
                          id: 6,
                          image: 'assets/images/gallery/brogan/15.jpg'
                      },
                      {
                          id: 7,
                          image: 'assets/images/gallery/brogan/5.jpg'
                      },
                      {
                          id: 8,
                          image: 'assets/images/gallery/brogan/17.jpg'
                      },
                      {
                          id: 9,
                          image: 'assets/images/gallery/brogan/19.jpg'
                      },
                      {
                          id: 10,
                          image: 'assets/images/gallery/brogan/18.jpg'
                      },
                      {
                          id: 11,
                          image: 'assets/images/gallery/brogan/10.jpg'
                      },
                      {
                          id: 12,
                          image: 'assets/images/gallery/brogan/3.jpg'
                      },
                      {
                          id: 13,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 14,
                          image: 'assets/images/gallery/brogan/4.jpg'
                      },
                      {
                          id: 15,
                          image: 'assets/images/gallery/brogan/5.jpg'
                      },
                      {
                          id: 16,
                          image: 'assets/images/gallery/brogan/0.jpg'
                      },
                      {
                          id: 17,
                          image: 'assets/images/gallery/brogan/1.jpg'
                      }
                    ]
                },
                {
                    id: 7,
                    title: 'Curtice',
                    image: 'assets/images/gallery/brogan/1.jpg',
                    items: [
                      {
                          id: 1,
                          image: 'assets/images/gallery/brogan/3.jpg'
                      },
                      {
                          id: 2,
                          image: 'assets/images/gallery/brogan/5.jpg'
                      },
                      {
                          id: 3,
                          image: 'assets/images/gallery/brogan/4.jpg'
                      },
                      {
                          id: 4,
                          image: 'assets/images/gallery/brogan/7.jpg'
                      },
                      {
                          id: 5,
                          image: 'assets/images/gallery/brogan/8.jpg'
                      },
                      {
                          id: 6,
                          image: 'assets/images/gallery/brogan/14.jpg'
                      },
                      {
                          id: 7,
                          image: 'assets/images/gallery/brogan/20.jpg'
                      },
                      {
                          id: 8,
                          image: 'assets/images/gallery/brogan/4.jpg'
                      },
                      {
                          id: 9,
                          image: 'assets/images/gallery/brogan/9.jpg'
                      },
                      {
                          id: 10,
                          image: 'assets/images/gallery/brogan/10.jpg'
                      },
                      {
                          id: 11,
                          image: 'assets/images/gallery/brogan/8.jpg'
                      },
                      {
                          id: 12,
                          image: 'assets/images/gallery/brogan/12.jpg'
                      },
                      {
                          id: 13,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 14,
                          image: 'assets/images/gallery/brogan/9.jpg'
                      },
                      {
                          id: 15,
                          image: 'assets/images/gallery/brogan/15.jpg'
                      },
                      {
                          id: 16,
                          image: 'assets/images/gallery/brogan/0.jpg'
                      }
                    ]
                },
                {
                    id: 8,
                    title: 'Barronett',
                    image: 'assets/images/gallery/brogan/19.jpg',
                    items: [
                      {
                          id: 1,
                          image: 'assets/images/gallery/brogan/1.jpg'
                      },
                      {
                          id: 2,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 3,
                          image: 'assets/images/gallery/brogan/12.jpg'
                      },
                      {
                          id: 4,
                          image: 'assets/images/gallery/brogan/13.jpg'
                      },
                      {
                          id: 5,
                          image: 'assets/images/gallery/brogan/16.jpg'
                      },
                      {
                          id: 6,
                          image: 'assets/images/gallery/brogan/15.jpg'
                      },
                      {
                          id: 7,
                          image: 'assets/images/gallery/brogan/20.jpg'
                      },
                      {
                          id: 8,
                          image: 'assets/images/gallery/brogan/17.jpg'
                      },
                      {
                          id: 9,
                          image: 'assets/images/gallery/brogan/19.jpg'
                      },
                      {
                          id: 10,
                          image: 'assets/images/gallery/brogan/18.jpg'
                      },
                      {
                          id: 11,
                          image: 'assets/images/gallery/brogan/10.jpg'
                      },
                      {
                          id: 12,
                          image: 'assets/images/gallery/brogan/3.jpg'
                      },
                      {
                          id: 13,
                          image: 'assets/images/gallery/brogan/2.jpg'
                      },
                      {
                          id: 14,
                          image: 'assets/images/gallery/brogan/4.jpg'
                      },
                      {
                          id: 15,
                          image: 'assets/images/gallery/brogan/5.jpg'
                      }
                    ]
                }
            ]
          }
      };
      getDataForSubcategory = (): any => {
          return {
            items: [
              {
                  id: 1,
                  image: 'assets/images/gallery/brogan/16.jpg'
              },
              {
                  id: 2,
                  image: 'assets/images/gallery/brogan/15.jpg'
              },
              {
                  id: 3,
                  image: 'assets/images/gallery/brogan/13.jpg'
              },
              {
                  id: 4,
                  image: 'assets/images/gallery/brogan/7.jpg'
              },
              {
                  id: 5,
                  image: 'assets/images/gallery/brogan/8.jpg'
              },
              {
                  id: 6,
                  image: 'assets/images/gallery/brogan/14.jpg'
              },
              {
                  id: 7,
                  image: 'assets/images/gallery/brogan/20.jpg'
              },
              {
                  id: 8,
                  image: 'assets/images/gallery/brogan/4.jpg'
              },
              {
                  id: 9,
                  image: 'assets/images/gallery/brogan/9.jpg'
              },
              {
                  id: 10,
                  image: 'assets/images/gallery/brogan/10.jpg'
              },
              {
                  id: 11,
                  image: 'assets/images/gallery/brogan/8.jpg'
              },
              {
                  id: 12,
                  image: 'assets/images/gallery/brogan/12.jpg'
              },
              {
                  id: 13,
                  image: 'assets/images/gallery/brogan/2.jpg'
              },
              {
                  id: 14,
                  image: 'assets/images/gallery/brogan/9.jpg'
              },
              {
                  id: 15,
                  image: 'assets/images/gallery/brogan/15.jpg'
              },
              {
                  id: 16,
                  image: 'assets/images/gallery/brogan/0.jpg'
              }
            ]
          };
      };

      getDataForLayout3 = ():any => {
          return {
            items: [
                {
                    id: 1,
                    title: 'Nutrioso',
                    subtitle: 'Friday, August 07, 2017',
                    image: 'assets/images/gallery/nutrioso/15.jpg',
                    topic:'topic1'
                },
                {
                    id: 2,
                    title: 'Bluetown',
                    subtitle: 'Wednesday, July 05, 2017',
                    image: 'assets/images/gallery/bluetown/11.jpg',
                    topic: 'topic2'
                },
                {
                    id: 3,
                    title: 'Fairhaven',
                    subtitle: 'Sunday, October 08, 2016',
                    image: 'assets/images/gallery/fairhaven/16.jpg',
                    topic: 'topic3'
                },
                {
                    id: 4,
                    title: 'Fredericktown',
                    subtitle: 'Monday, June 26, 2017',
                    image: 'assets/images/gallery/fredericktown/11.jpg',
                    topic: 'topic4'
                },
                {
                    id: 5,
                    title: 'Caledonia',
                    subtitle: 'Thursday, May 19, 2016',
                    image: 'assets/images/gallery/caledonia/3.jpg',
                    topic: 'topic5'
                }
            ]
          };
      };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
       let result = {
          title: item.title,
          data: [],
          events: this.getEventsForTheme(item)
      };
      result[this.getShowItemId(item)] = true;
      return result;
    };

    getShowItemId = (item: any):string => {
        console.log(this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1));
        return this.getId()  + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        SpinnerDialog.show(null, "Loading");
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('imageGallery/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        SpinnerDialog.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        SpinnerDialog.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                SpinnerDialog.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
