let variable1: any;
let variable2: unknown;

variable1 = 10;
console.log(variable1);

variable1 = "Hello";
console.log(variable1);
//Có thể gán bất kỳ kiểu dữ liệu nào cho biến any
// Cũng có thể gán kiểu dữ liệu khác cho biến any


variable2 = 10;
console.log(variable2);

variable2 = "Hello";
console.log(variable2);

if (typeof variable2 === 'string') {
    console.log(variable2.toUpperCase());
} else {
    console.log("Biến không phải là kiểu string.");
}
// Chỉ có thể gán giá trị cho biến unknown, không thể sử dụng trực tiếp
// Cũng có thể gán giá trị khác cho biến unknown