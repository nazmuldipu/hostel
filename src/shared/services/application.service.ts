import { Injectable } from '@angular/core';
import { OrderByDirection } from '@firebase/firestore-types';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, take } from 'rxjs/operators';

import { Application } from '../models/application.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  serviceUrl = 'application';

  constructor(private afs: AngularFirestore) {}

  create(application: Application) {
    const value = {
      ...application,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    // console.log('service', value);
    return this.afs.collection(this.serviceUrl).add({
      ...value
    });
  }

  getAll() {
    return this.afs
      .collection(this.serviceUrl, ref => ref.orderBy('createdAt'))
      .snapshotChanges()
      .pipe(
        take(1),
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Application;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  get(sid: string) {
    return this.afs
      .doc(this.serviceUrl + '/' + sid)
      .valueChanges()
      .pipe(
        take(1),
        map(ref => {
          const value = { ...ref, id: sid } as Application;
          return value;
        })
      );
  }

  getPaginatedStartAfter(order: OrderByDirection = 'asc', limit, startAfter) {
    // console.log(companyId, order, limit, startAfter);
    return this.afs
      .collection(this.serviceUrl, ref =>
        ref
          .orderBy('createdAt', order)
          .limit(limit)
          .startAfter(startAfter)
      )
      .snapshotChanges()
      .pipe(
        // take(1),
        map(actions => {
          if (order === 'asc') {
            actions.reverse();
          }
          // console.log(actions);
          return actions.map(a => {
            const data = a.payload.doc.data() as Application;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  update(aid, application: Application) {
    delete application['id'];
    return this.afs.doc(this.serviceUrl + '/' + aid).update({
      ...application,
      updatedAt: new Date()
    });
  }

  delete(aid) {
    return this.afs.doc(this.serviceUrl + '/' + aid).delete();
  }
}
