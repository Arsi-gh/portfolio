import React from 'react'
import Comment from './comment'

const comments = [
    {id : 1 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus quaerat ab exercitationem inventore delectus doloremque deleniti odit quae, aperiam molestias '},
    {id : 2 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'expedita vero eveniet nostrum sed unde. Temporibus, sed nesciunt.expedita vero eveniet '},
    {id : 3 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'expedita vero eveniet nostrum sed unde. Temporibus, sed nesciunt.'},
    {id : 5 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, doloribus quaerat ab exercitationem inventore delectus doloremque deleniti odit quae, aperiam molestias expedita vero eveniet nostrum sed unde. Temporibus, sed nesciunt.'},
    {id : 4 , name : 'Arsalan ghoochani' , desc : 'Technical team leader' , text : 'xpedita vero eveniet nostr empo xpedita vero eveniet nostr empo  xpedita vero eveniet nostr empo xpedita vero eveniet nostr empoeribus, sed nesciunt.'},
    {id : 6 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'expedita vero eveniet nostrum sed unde. Temporibus, sed nesciunt.expedita vero eveniet nostrum sed unde. Temporibus, sed nesciunt.'},
    {id : 7 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'expedita vero eveniet nostr emporibus, sed nesciunt.'},
    {id : 8 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'expedita vero eveniet nostr emporibus, sed nesciunt.'},
    {id : 9 , name : 'Arsalan ghoochani' , desc : 'graphic and ui ux designer' , text : 'expedita vero eveniet nostr emporibus, sed nesciunt.'},
]

export default function CommentWrapper() {
  return (
    <>
    <h3 className='title'>Comments</h3>
    <section className='comment-wrapper my-12 flex flex-col max-w-screen-xl xl:px-12 xl:max-h-[50rem] flex-wrap gap-8 items-center mx-auto md:max-h-[65rem] max-xl:max-w-[50rem] max- max-md:px-4'>
        {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
    </section>
    </>
  )
}

