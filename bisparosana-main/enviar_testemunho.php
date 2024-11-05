<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Inclui o autoloader do Composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ... (recebe os dados do formulário como antes)

    $mail = new PHPMailer(true); // Cria uma nova instância do PHPMailer

    try {
        // Configura o servidor SMTP (ajuste conforme necessário)
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com'; // Substitua pelo seu servidor SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'seu_email@example.com'; // Substitua pelo seu email
        $mail->Password = 'sua_senha'; // Substitua pela sua senha
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Ou PHPMailer::ENCRYPTION_STARTTLS
        $mail->Port = 465; // Ou 587

        // Configura o remetente e o destinatário
        $mail->setFrom($email, $nome);
        $mail->addAddress($para);

        // Configura o assunto e o corpo do email
        $mail->isHTML(false); // Define o email como texto simples
        $mail->Subject = $assunto;
        $mail->Body = $corpo;

        // Envia o email
        $mail->send();
        echo "Testemunho enviado com sucesso!";
    } catch (Exception $e) {
        echo "Erro ao enviar testemunho: {$mail->ErrorInfo}";
    }
}
?>