import {useState} from 'react'

export default function FeedbackForm(){
    const [text, setText] = useState<string>("");
    const [status, setStatus] = useState('typing');
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');
      
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';

    if (isSent){
        return <h1>Thanks for the feedback</h1>
    }

    return(
        <form onSubmit={handleSubmit} className='p-4 border rounded'>
            <p>How has your experience been with our product?</p>
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                disabled={isSending}
                className="w-full p-2 border rounded mb-2"
            />
            <br />
            <button type="submit" disabled={isSending} className="px-4 py-2 bg-blue-500 text-white rounded">
                Send
            </button>
            {isSending && <p>Sending...</p>}
        </form>
    );
}

function sendMessage(text: string){
    return new Promise(resolve => setTimeout(resolve, 2000));
}
