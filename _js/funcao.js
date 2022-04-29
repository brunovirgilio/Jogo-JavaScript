cont = 0
        n=document.getElementById('resp')
        p=document.getElementById('pergunta')
        r=document.getElementById('resposta')
        r1=document.getElementsByTagName('p')[1]
        r2=document.getElementsByTagName('p')[2]
        r3=document.getElementsByTagName('p')[3]
        r4=document.getElementsByTagName('p')[4]
        h1=document.getElementsByTagName('h2')[1]
        var nome

        function pergunta1(){
            nome=document.getElementById('resp').value
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/1-TRANSITO.jpg'
            p.innerHTML='<h2>1. De acordo com o Código de Trânsito Brasileiro (CTB) qual é a ordem de responsabilidade entre veículos?</h2><p>1) Bicicleta tem responsabilidade com o carro, que é responsável pela segurança do ônibus<br>2) Ônibus é responsável pelo carro, que é responsável pela segurança da bicicleta<br>3) Carro tem responsabilidade com a bicicleta, que é responsável pelo ônibus<br></p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r4.innerHTML=' '
            r2.innerHTML='<p onclick="confirma1()">Confirma</p>'            
        }

        function confirma1(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta2()">Próxima</p>'
        }
        
        function pergunta2(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/2-MOTORISTA.jpg'
            p.innerHTML='<h2>2. O motorista comete qual infração quando estaciona o carro em ciclovia ou ciclofaixa?</h2><p>1) Média, com penalidade de 4 pontos na carteira de motorista<br>2) Grave, sujeita a multa de guincho para retirada do veículo<br>3) Apenas uma medida administrativa, sujeita a remoção do veículo do local<br></p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma2()">Confirma</p>'            
        }
        function confirma2(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta3()">Próxima</p>'
        }
        function pergunta3(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/3-BICICLETA.jpg'
            p.innerHTML='<h2>3. Em qual situação é permitido andar de bicicleta na calçada?</h2><p>1) Apenas quando a via estiver engarrafada<br>2) Quando acontece algum acidente que obstrui a passagem do ciclista<br>3) Quando a bicicleta estiver devidamente sinalizada e autorizada pelo órgão que tem responsabilidade pela calçada</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma3()">Confirma</p>'      
        }
        function confirma3(){
            if(Number(n.value)==3){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 3 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta4()">Próximo</p>'
        }
        function pergunta4(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/4-PEDESTRE.jpg'
            p.innerHTML='<h2>4. Qual destas condutas não é indicada para um pedestre?</h2><p>1) Atravessar a rua em linha reta<br>2) Atravessar fora da faixa ou da passarela<br>3) Evitar ficar próximo ao meio fio no deslocamento pela calçada</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma4()">Confirma</p>'      
        }
        function confirma4(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta5()">Próximo</p>'
        }
        function pergunta5(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/5-MOTO.jpg'
            p.innerHTML='<h2>5. É permitido transportar caixas, sacolas e outros volumes na motocicleta, sem utilização de baú fixado?</h2><p>1) Não, só é permitido carregar objetos dentro do baú ou bagageiro, para segurança do piloto e dos demais veículos<br>2) É permitido, mas a dimensão dos volumes não pode ser maior do que as costas do motociclista<br>3) É permitido apenas em vias cuja velocidade máxima permitida seja 40km/h</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma5()">Confirma</p>'      
        }
        function confirma5(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta6()">Próximo</p>'
        }
        function pergunta6(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/6-MAO-MOTO.jpg'
            p.innerHTML='<h2>6. Em qual situação segurar o guidão da motocicleta apenas com uma mão é permitida?</h2><p>1) Apenas quando, eventualmente, necessitar sinalizar uma manobra<br>2) Nenhuma<br>3) Quando o motociclista estiver com formigamento ou câimbra em uma da mãos<br></p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma6()">Confirma</p>'      
        }
        function confirma6(){
            if(Number(n.value)==1){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 1 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta7()">Próximo</p>'
        }
        function pergunta7(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/7-RURAL.jpg'
            p.innerHTML='<h2>7. Como deve ser a circulação de pedestres em vias rurais sem acostamento?</h2><p>1)No meio da pista, quando veículos não estiverem circulando<br>2) No mesmo sentido dos veículos, na extremidade da pista<br>3) Nas bordas da pista, em sentido contrário ao de circulação de carros, exceto em locais que a sinalização não permita</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma7()">Confirma</p>'      
        }
        function confirma7(){
            if(Number(n.value)==3){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 3 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta8()">Próximo</p>'
        }
        function pergunta8(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/8-POLICIAL.jpg'
            p.innerHTML='<h2>8. Cidadãos podem sugerir implantação de equipamentos e alteração de normas de sinalização e trânsito?</h2><p>1) Não<br>2) Sim, em todas as situações o cidadão pode sugerir fiscalização, sinalização e sugerir normas<br>3) Sim, mas apenas quando campanhas de trânsito estiverem vigentes</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma8()">Confirma</p>'      
        }
        function confirma8(){
            if(Number(n.value)==2){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 2 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta9()">Próximo</p>'
        }
        function pergunta9(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/9-ACIDENTE.jpg'
            p.innerHTML='<h2>9. Caso uma pessoa esteja dirigindo um carro que não é seu e cometa alguma infração de trânsito, quem será multado?</h2><p>1) O condutor e o proprietário<br>2) O proprietário<br>3) O condutor</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma9()">Confirma</p>'      
        }
        function confirma9(){
            if(Number(n.value)==3){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 3 é a correta. '
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="pergunta10()">Próximo</p>'
        }
        function pergunta10(){
            document.getElementById('resp').value=' '
            document.getElementById('capa').src='_imagens/10-ENGARRAFAMENTO.jpg'
            p.innerHTML='<h2>10. Qual região do país tem o maior tempo médio de deslocamento entre casa-trabalho?</h2><p>1) Grande São Paulo<br>2) Região Metropolitana do Rio de Janeiro<br>3) Grande BH</p>'
            r1.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML=' '
            r2.innerHTML='<p onclick="confirma10()">Confirma</p>'      
        }
        function confirma10(){
            if(Number(n.value)==1){
                cont++
                r1.innerHTML='Resposta Correta'
                r1.style.background='green'
                r1.style.color='white'
            }
            else{
                r1.innerHTML='Resposta Errada, a opção 1 é a correta.'
                r1.style.background='red'
                r1.style.color='white'
            }
            r2.innerHTML=''    
            r3.innerHTML='<p onclick="resultado()">Resultado</p>'
        }
        function resultado(){
            p.innerHTML=' '
            r2.innerHTML=' '
            r3.innerHTML='<a href="principal.html">Refazer</a>'
            if(cont==0){
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, você precisa ter mais conhecimento.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final1.jpg'
            }
            else if(cont>=1 && cont<=3){
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, seu conhecimento é regular, pesquise mais.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final2.jpg'
            }
            else if(cont>=4 && cont<=7){
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, você tem um bom conhecimento, mas pode melhorar.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final3.jpg'
            }
            else{
                r.innerHTML =`Olá ${nome}, das 10 questões você acertou ${cont}, PARABÉNS você tem muito conhecimento.`
                r.style.fontSize='20px'
                document.getElementById('capa').src='_imagens/foto-final4.jpg'
            }
        }