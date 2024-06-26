// Make code cleaner, this one uses a series of ? : conditions. The problem is that the information about each drink is spread out across multiple conditions. 

// function Drink({ name }) {
//     return (
//       <section>
//         <h1>{name}</h1>
//         <dl>
//           <dt>Part of plant</dt>
//           <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
//           <dt>Caffeine content</dt>
//           <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
//           <dt>Age</dt>
//           <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
//         </dl>
//       </section>
//     );
//   }

// This is cleaner code. Refactored to use a single if statement instead of three ? : conditions. 


function Drink({ name }) {

   let part, caffeine, age;
   if (name === 'tea') {
        part = 'leaf';
        caffeine = '15–70 mg/cup';
        age = '4,000+ years';
   } else if (name === 'coffee') {
        part = 'bean';
        caffeine = '80–185 mg/cup';
        age = '1,000+ years';
   }

    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }