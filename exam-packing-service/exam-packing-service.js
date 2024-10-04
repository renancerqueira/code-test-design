require('http').createServer((q,s)=>{
    if(q.method=='POST'&&q.url.match(/^\/exam-packing-service\/answer-sheet-contents\/v1\/.*\/generate$/)){
        setTimeout(()=>{
            s.writeHead(200,{'Content-Type':'application/json'});
            s.end(JSON.stringify({
                "sections": [{
                    "questions": [{
                        "stem": "What's the capital of France?",
                        "type": "Essay"
                    }, {
                        "stem": "What's the capital of Ireland?",
                        "type": "Essay"
                    }]
                }]
            }));
        },1200+Math.random()*800);
    }else{
        s.writeHead(404);s.end();
    }
}).listen(3123,()=>{
    console.log(`POST http://localhost:3123/exam-packing-service/answer-sheet-contents/v1/:formId/generate`);
});