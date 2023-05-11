import React, { useState } from "react";

const initialState = [
  {
    name: "house",
    rooms: [
      {
        name: "room1",
        text: "Room1",
      },
    ],
  },
  {
    name: "car",
    text: "i20",
  },
];

function RoomName(props) {
  const { data, onChange } = props;
  return (
    <div>
      <div>Update Room Name</div>
      <input value={data.text} onChange={onChange}/>
    </div>
  );
}

function CarName(props) {
  const { data, onChange } = props;
  return (
    <div>
      <div>Update Car Name</div>
      <input value={data.text} onChange={onChange}/>
    </div>
  );
}



function ShallowCopying() {
    const [info, setInfo] = useState(initialState);

    const onRoomChange = (evt)=>{
        setInfo((state)=>{
            var newState = [
                {
                    ...state[0],
                    rooms:[
                        {
                            ...state[0].rooms[0],
                            text:evt.target.value
                        }
                    ]
                },
                state[1]
            ]
            return newState
        })
    }

    const onCarChange = (evt)=>{
        setInfo((state)=>{
            const newState = [
                state[0],
                {
                    ...state[1],
                    text:evt.target.value
                }
            ]
            return newState
        })
    }


console.log(info);
  return (
    <div>
      <RoomName data={info[0].rooms[0]} onChange={onRoomChange} />
      <CarName data={info[1]} onChange={onCarChange} />
    </div>
  );
}

export default ShallowCopying;
