const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
    { ime: 'Naumcho', prosek: 6.66, grad: 'Ohrid'},
    { ime: 'Pauncho', prosek: 9.6, grad: 'Ohrid'}
  ];

 //? 1. Site studenti od Skopje cie ime zavrshuva na A i imaat prosek nad 7 pordedeni po ime(rastechki)
  const skopjeStudents = studenti.filter(student => student.grad === 'Skopje' && student.ime.endsWith('a') && student.prosek > 7)
    .sort((a, b) => a.ime.localeCompare(b.ime));
  console.log("1. Students from Skopje, ending with 'a', and average above 7:", skopjeStudents);
  
 //? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki
  const highAchieversOutsideSkopje = studenti.filter(student => student.prosek > 9 && student.grad !== 'Skopje')
    .sort((a, b) => b.prosek - a.prosek);
  console.log("2. Students with average above 9, not from Skopje, sorted by average:", highAchieversOutsideSkopje);
  
 //? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
  const firstThreeFiveCharStudents = studenti.filter(student => student.ime.length === 5)
    .sort((a, b) => a.prosek - b.prosek)
    .slice(0, 3);
  console.log("3. First 3 students with names of 5 characters, sorted by average:", firstThreeFiveCharStudents);
  
//? 4. Vkupen prosek na studenti koi se od Kumanovo
  const kumanovoProsek = studenti.filter(student => student.grad === 'Kumanovo')
    .reduce((total, student) => total + student.prosek, 0) / studenti.filter(student => student.grad === 'Kumanovo').length;
  console.log("4. Average of students from Kumanovo:", kumanovoProsek);
  
 //? 5. Prosek na prosecite od gradovite Skopje i Ohrid
  const skopjeStudentsAvg = studenti.filter(student => student.grad === 'Skopje')
    .reduce((total, student) => total + student.prosek, 0) / studenti.filter(student => student.grad === 'Skopje').length;
  const ohridStudentsAvg = studenti.filter(student => student.grad === 'Ohrid')
    .reduce((total, student) => total + student.prosek, 0) / studenti.filter(student => student.grad === 'Ohrid').length;
  console.log("5. Average of averages from Skopje and Ohrid:", skopjeStudentsAvg, ohridStudentsAvg);
  
//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica
  studenti.push({ ime: 'Goran', prosek: 8.3, grad: 'Strumica' });
  
  //? 7. Da se izbrishe prviot student vo studenti
  studenti.shift();
  
//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo ocenkite so prosek se za 1 pogolem (Dinamichki)
  const citiesToUpdate = ['Ohrid', 'Skopje', 'Kumanovo'];
  const updatedStudents = studenti.map(student => {
    if (citiesToUpdate.includes(student.grad)) {
      return { ...student, prosek: student.prosek + 1 };
    }
    return student;
  });
  console.log("8. Students from Ohrid, Skopje, and Kumanovo with averages increased by 1:", updatedStudents);
  