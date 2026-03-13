-- Delete English questions and insert Spanish neutral ones
DELETE FROM answers;
DELETE FROM game_sessions;
DELETE FROM questions;

INSERT INTO questions (question, option_a, option_b, option_c, option_d, correct_option, category, difficulty) VALUES
-- JavaScript
('¿Cuál es el resultado de typeof null en JavaScript?', '"null"', '"undefined"', '"object"', '"boolean"', 'C', 'javascript', 'easy'),
('¿Cuál de estos NO es parte del event loop de JavaScript?', 'Call Stack', 'Task Queue', 'Heap', 'Thread Pool', 'D', 'javascript', 'medium'),
('¿Qué ocurre aquí? let a = 10; function f() { console.log(a); let a = 20; } f()', 'Imprime 10', 'Imprime 20', 'Imprime undefined', 'ReferenceError', 'D', 'javascript', 'hard'),
('¿Qué significa que una Promise esté en estado "pending"?', 'Fue rechazada', 'Fue resuelta', 'Aún no se ha resuelto', 'Fue cancelada', 'C', 'javascript', 'easy'),
('¿Cuál es el resultado de 0 === false en JavaScript?', 'true', 'false', 'TypeError', 'undefined', 'B', 'javascript', 'easy'),
('¿Qué es el hoisting en JavaScript?', 'Mover elementos en el DOM', 'Las declaraciones se mueven al inicio del scope', 'Un algoritmo de ordenamiento', 'Un patrón de manejo de errores', 'B', 'javascript', 'medium'),
('¿Qué método de array retorna un nuevo array sin modificar el original?', 'splice()', 'push()', 'map()', 'sort()', 'C', 'javascript', 'medium'),
('¿Qué característica de ES6 permite extraer valores de arrays en variables?', 'Spread operator', 'Destructuring', 'Template literals', 'Arrow functions', 'B', 'javascript', 'easy'),
-- Nerdearla
('¿En qué año se fundó Nerdearla?', '2012', '2014', '2016', '2018', 'B', 'nerdearla', 'easy'),
('¿En qué países se ha realizado Nerdearla?', '🇦🇷 🇧🇷 🇲🇽 🇨🇱', '🇦🇷 🇨🇱 🇲🇽 🇪🇸', '🇦🇷 🇨🇴 🇵🇪 🇨🇱', '🇦🇷 🇺🇾 🇧🇷 🇲🇽', 'B', 'nerdearla', 'medium'),
('¿Cuál es el venue principal de Nerdearla en Buenos Aires?', 'Teatro Colón', 'Centro Cultural Konex', 'Luna Park', 'Usina del Arte', 'B', 'nerdearla', 'easy'),
('¿Qué creador de UNIX fue speaker en Nerdearla?', 'Dennis Ritchie', 'Ken Thompson', 'Brian Kernighan', 'Linus Torvalds', 'B', 'nerdearla', 'hard'),
('¿Qué creador de CSS dio una charla en Nerdearla?', 'Brendan Eich', 'Tim Berners-Lee', 'Håkon Wium Lie', 'Eric Meyer', 'C', 'nerdearla', 'hard'),
('¿Qué es sysarmy, la organización detrás de Nerdearla?', 'Una empresa de software', 'Una comunidad de sysadmins y profesionales de IT', 'Una agencia gubernamental', 'Un programa universitario', 'B', 'nerdearla', 'medium'),
('¿Nerdearla es un evento gratuito?', 'No, las entradas cuestan $50', 'Solo el primer día es gratis', 'Sí, siempre ha sido gratuito', 'Depende del país', 'C', 'nerdearla', 'easy');
