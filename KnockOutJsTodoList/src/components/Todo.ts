import ko from "knockout";
import $ from "jquery";
export const Todos = () => {

    const TodoComponent = () => {
        ko.components.register(
            'todo-list', {
            viewModel: function(){
                const _this = this;
                const todoListFunctions = function(id:number,txt:string,isComplete:boolean=false){
                    this.id = ko.observable(id);
                    this.todo = ko.observable(txt);
                    this.isComplete = ko.observable(isComplete)
                    this.handleChangeComplete = ()=>{
                        this.isComplete(!this.isComplete());
                    }
                    this.handleDelete = (id:Function)=>{
                        const arr = ko.utils.arrayFilter(_this.todoList(),(item)=>{
                            return item.id() !== id(); 
                        })
                        _this.todoList(arr);
                    }
                }
                this.todoList = ko.observable([
                    new todoListFunctions(0,"this is the first todo",true),
                    new todoListFunctions(1,"this is the second todo",true),
                    new todoListFunctions(2,"this is the third todo",false)
                ]);


                this.todoText = ko.observable("");
                this.totalLength = ko.computed(()=>this.todoList().length)
                this.totalIsCompletedLength = ko.computed(()=>ko.utils.arrayFilter(this.todoList(),(item)=>item.isComplete() === true).length);

                this.addTodo = ()=>{
                    if(this.todoText()){
                         this.todoList([
                            ...this.todoList(),
                            new todoListFunctions(Date.now(),this.todoText(),false)
                        ])
                    }else{
                        alert("you can\'t submit an empty")
                    }
                    this.todoText("");
                }
                this.removeAllTrue = ()=>{
                    const arr = ko.computed(()=>{
                        return ko.utils.arrayFilter(this.todoList(),(item)=>{
                            return item.isComplete() !== true;
                        })
                    })
                    this.todoList(arr());
                }
                this.isAllCheked = ko.computed(()=>{   
                    const length = ko.utils.arrayFilter(this.todoList(),(item)=>{
                        return item.isComplete() === true;
                    }).length;
                    if(length === this.todoList().length){
                        return true;
                    }
                    return false;
                })
                
                this.selectedAll = ()=>{
                    const status = $("#allDone").is(":checked");
                    for(let i = 0; i < this.todoList().length; i++){
                        this.todoList()[i].isComplete(status);
                    }  
                }
            },
            template: `
                    <div>
                        <input type="text" data-bind="value:todoText" /><button data-bind="click:addTodo">add todo</button>
                    </div>
                    <ul data-bind="foreach:{data:todoList,as:'todo'}">
                        <li>
                            id:<span data-bind="text:id"></span>
                            <input type="checkbox" data-bind="checked:isComplete(),event:{change:handleChangeComplete}"/>
                            <span data-bind="text:todo">todos</span>
                            <button data-bind="click:handleDelete.bind($data,id)">remove todos</button>
                        </li>
                    </ul>
                    <div>
                        total length:<span data-bind="text:totalLength">0</span> /
                        completed length:<span data-bind="text:totalIsCompletedLength">0</span>
                        <div>
                            selected All <input type="checkbox" id="allDone" data-bind="checked:isAllCheked,event:{click:selectedAll}"/>
                        </div>
                        <button data-bind="click:removeAllTrue">remove True todos</button>
                    </div>
                `
        }
        )
    }
    return {
        TodoComponent
    }
}

export default Todos;