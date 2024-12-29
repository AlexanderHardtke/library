import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


// import { Injectable, inject } from '@angular/core';
// import { Firestore, query, where, collection, collectionData, doc, onSnapshot, addDoc, updateDoc, deleteDoc, limit, orderBy } from '@angular/fire/firestore';
// import { catchError, elementAt, Observable } from 'rxjs';
// import { Note } from '../interfaces/note.interface';

@Component({
  selector: 'app-simple-crud',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './simple-crud.component.html',
  styleUrl: './simple-crud.component.scss'
})

export class SimpleCrudComponent {

}
export interface Note {
  id?: string;
  type: "note" | "trash";
  title:string;
  content:string;
  marked: boolean;
}


// Benutze ein Injectable anstatt einer Component

// @Injectable({
//   providedIn: 'root'
// })
// export class SimpleCrudComponent {

//   trashNotes: Note[] = [];
//   normalNotes: Note[] = [];
//   normalMarkedNotes: Note[] = [];
//   firestore: Firestore = inject(Firestore);
//   unsubNotes;
//   unsubTrash;
//   unsubMarkedNotes;

//   constructor() {
//     this.unsubNotes = this.subNotesList();
//     this.unsubMarkedNotes = this.subMarkedNotesList();
//     this.unsubTrash = this.subTrashList();
//   }

//   getColIdFromNote(note: Note) {
//     if (note.type == 'note') {
//       return 'notes'
//     } else {
//       return 'trash'
//     }
//   }

//   getCleanJson(note: Note): {} {
//     return {
//       type: note.type,
//       title: note.title,
//       content: note.content,
//       marked: note.marked
//     }
//   }

//   async addNote(item: Note, colId: "notes" | "trash") {
//     if (colId == "notes") {
//       await addDoc(this.getNotesRef(), item).catch(
//         (err) => { console.error(err) }
//       ).then(
//         (docRef) => { console.log("Document written with ID: ", docRef?.id); }
//       );
//     } else {
//       await addDoc(this.getTrashRef(), item).catch(
//         (err) => { console.error(err) }
//       ).then(
//         (docRef) => { console.log("Document written with ID: ", docRef?.id); }
//       );
//     }
//   }

//   async updateNote(note: Note) {
//     if (note.id) {
//       let docRef = this.getSingleDocRef(this.getColIdFromNote(note), note.id);
//       await updateDoc(docRef, this.getCleanJson(note)).catch(
//         (err) => { console.log(err) }
//       )
//     }
//   }

//   async deleteNote(colId: "notes" | "trash", docId: string) {
//     await deleteDoc(this.getSingleDocRef(colId, docId)).catch(
//       (err) => { console.log(err) }
//     );
//   }

//   ngonDestroy() {
//     this.unsubNotes();
//     this.unsubTrash();
//     this.unsubMarkedNotes();
//   }

//   subTrashList() {
//     return onSnapshot(this.getTrashRef(), (list) => {
//       this.trashNotes = [];
//       list.forEach(element => {
//         this.trashNotes.push(this.setNoteObject(element.data(), element.id));
//       })
//     });
//   }

//   subNotesList() {
//     const q = query(this.getNotesRef(),orderBy("title"), limit(100)); //where("marked", "==", false) where und order zusammen geht nicht
//     return onSnapshot(q, (list) => {
//       this.normalNotes = [];
//       list.forEach(element => {
//         this.normalNotes.push(this.setNoteObject(element.data(), element.id));
//       })
//       list.docChanges().forEach((change) => {
//         if (change.type === "added") {
//             console.log("New Note: ", change.doc.data());
//         }
//         if (change.type === "modified") {
//             console.log("Modified Note: ", change.doc.data());
//         }
//         if (change.type === "removed") {
//             console.log("Removed Note: ", change.doc.data());
//         }
//       });
//     });
//   }

//   subMarkedNotesList() {
//     const q = query(this.getNotesRef(),where("marked", "==", true), limit(100));
//     return onSnapshot(q, (list) => {
//       this.normalMarkedNotes = [];
//       list.forEach(element => {
//         this.normalMarkedNotes.push(this.setNoteObject(element.data(), element.id));
//       })
//     });
//   }

//   getNotesRef() {
//     return collection(this.firestore, 'notes');
//   }

//   getTrashRef() {
//     return collection(this.firestore, 'trash');
//   }

//   getSingleDocRef(colId: string, docId: string) {
//     return doc(collection(this.firestore, colId), docId);
//   }

//   setNoteObject(obj: any, id: string): Note {
//     return {
//       id: id,
//       type: obj.type || "note",
//       title: obj.title || "",
//       content: obj.content || "",
//       marked: obj.marked || false
//     }
//   }
// }