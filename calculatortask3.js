<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="calculatortask1.css">
    <script src="calculator.js"></script>
</head>
<body>
    <table class="calculator" >
        <tr>
          <td colspan="3"> <input class="display" type="text" id="result" /> </td>
          <td> <input type="button" value="C" onclick="clearScreen()" id="buttons" /> </td>
        </tr>
        <tr>
          <td> <input type="button" value="1" onclick="display('1')" /> </td>
          <td> <input type="button" value="2" onclick="display('2')" /> </td>
          <td> <input type="button" value="3" onclick="display('3')" /> </td>
          <td> <input type="button" value="/" onclick="display('/')" /> </td>
        </tr>
        <tr>
          <td> <input type="button" value="4" onclick="display('4')" /> </td>
          <td> <input type="button" value="5" onclick="display('5')" /> </td>
          <td> <input type="button" value="6" onclick="display('6')" /> </td>
          <td> <input type="button" value="-" onclick="display('-')" /> </td>
        </tr>
        <tr>
          <td> <input type="button" value="7" onclick="display('7')" /> </td>
          <td> <input type="button" value="8" onclick="display('8')" /> </td>
          <td> <input type="button" value="9" onclick="display('9')" /> </td>
          <td> <input type="button" value="+" onclick="display('+')" /> </td>
        </tr>
        <tr>
          <td> <input type="button" value="." onclick="display('.')" /> </td>
          <td> <input type="button" value="0" onclick="display('0')" /> </td>
          <td> <input type="button" value="=" onclick="calculate()" id="buttons" /> </td>
          <td> <input type="button" value="*" onclick="display('*')" /> </td>
        </tr>
      </table>

      <script type="text/javascript" src="calculator.js"></script>
</body>
</html>
