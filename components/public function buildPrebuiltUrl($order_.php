public function buildPrebuiltUrl($order_id, $customer_name, $amount, $product_name)
    {
        $items_data = array("name" => "$product_name", "amount" => "$amount", "quantity" => "1");
        $rsa = new Crypt_RSA();
        $data_pay = json_encode(array(
            "clientId" => "601b99e9-c2b4-3154-b8ea-9032e7d34895",
            "publicKey" => "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDEix+GrSgOFcS1ufoXWQgRKNSXmj06iCpXQQZBkMqYhN8WAwret5LlqqUfSIm9J4tha3NpHKpWjj2v/E31gGswiIFixsitQzF6Bif3ejuGuVulTUnIa3z9aGOLQ5z0g4xTO8LSpdSvtJXDLmfZA6dod4NajX+tB+gfVacFLlq0GwIDAQAB-----END PUBLIC KEY-----",
            "items" => json_encode(array($items_data)),
            "customerName" => "test",
            "totalAmount" => "500",
            "merchantOrderId" => "$order_id",
            "merchantKey" => "n5648vg.NfDZmckbRm5R2Iau9EEem-AniCQ",
            "projectName" => "Melo Music Online",
            "merchantName" => "Music Industry Development (MID)"
        ));
        
        $keyforencryption = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFD4IL1suUt/TsJu6zScnvsEdLPuACgBdjX82QQf8NQlFHu2v/84dztaJEyljv3TGPuEgUftpC9OEOuEG29z7z1uOw7c9T/luRhgRrkH7AwOj4U1+eK3T1R+8LVYATtPCkqAAiomkTU+aC5Y2vfMInZMgjX0DdKMctUur8tQtvkwIDAQAB-----END PUBLIC KEY-----';
        
        extract($rsa->createKey(1024));
        $rsa->loadKey($keyforencryption);

        // public key

        $rsa->setEncryptionMode(2);
        $ciphertext = $rsa->encrypt($data_pay);

        $value = base64_encode($ciphertext);

        $urlencode_value = urlencode($value);

        $encryptedHashValue = hash_hmac('sha256', $data_pay, $this->prebuilt_client_secret);

$redirect_url = "https://prebuilt.dinger.asia/?hashValue=$encryptedHashValue&payload=$urlencode_value";
        return $redirect_url;
    }
has context menu