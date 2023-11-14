export default function BookList() {
   let pageTitle = "Coding Books";
   let book1 = "https://www.google.com/aclk?sa=l&ai=DChcSEwiP6M2fl8KCAxW_NtQBHQuPAyUYABADGgJvYQ&ase=2&gclid=Cj0KCQiAr8eqBhD3ARIsAIe-buNTyyvoq3Iig8RzB1lI70H2TQoNS1Vtq61qYL1BfEQr5G9zxya6wekaAk11EALw_wcB&sig=AOD64_2VSBdEPMVDEy-No5zCwjUHL8uOwA&ctype=5&nis=6&adurl&ved=2ahUKEwi8i76fl8KCAxVoPd4AHZQaAJAQvhd6BAgBEF4";
   let book2 = "https://m.media-amazon.com/images/I/31YJmObNTnL._SX342_SY445_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51ABP9OsIoL._SY445_SX342_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Coding for Dummies" />
         <img src={book2} alt="The Self-Taught Programmer" />
         <img src={book3} alt="Think like a Programmer" />
      </div>
   );
}