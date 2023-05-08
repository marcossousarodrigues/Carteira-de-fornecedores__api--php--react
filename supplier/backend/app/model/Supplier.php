<?php

namespace app\model;
use app\model\Connection;
use PDO;

class Supplier extends Connection
{
    private static $table = 'tb_supplier';


    public function create($data)
    {
        $conn = $this->connect();

        $sql  = " INSERT INTO tb_supplier (name, fantasy, cnpj, keypix, pix, email, emailTwo, tel, telTwo, cep, ";
        $sql .= " address, number, complement, neighborhood, city, state, fk_user_id) ";
        $sql .= " VALUES (:name, :fantasy, :cnpj, :keypix, :pix, :email, :emailTwo, :tel, :telTwo, :cep, ";
        $sql .= " :address, :number, :complement, :neighborhood, :city, :state, :fk_user_id) ";


        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $data['name']);
        $stmt->bindParam(':fantasy', $data['fantasy']);
        $stmt->bindParam(':cnpj', $data['cnpj']);
        $stmt->bindParam(':keypix', $data['keypix']);
        $stmt->bindParam(':pix', $data['pix']);
        $stmt->bindParam(':email', $data['email']);
        $stmt->bindParam(':emailTwo', $data['emailTwo']);
        $stmt->bindParam(':tel', $data['tel']);
        $stmt->bindParam(':telTwo', $data['telTwo']);
        $stmt->bindParam(':cep', $data['cep']);
        $stmt->bindParam(':address', $data['address']);
        $stmt->bindParam(':number', $data['number']);
        $stmt->bindParam(':complement', $data['complement']);
        $stmt->bindParam(':neighborhood', $data['neighborhood']);
        $stmt->bindParam(':city', $data['city']);
        $stmt->bindParam(':state', $data['state']);
        $stmt->bindParam(':fk_user_id', $data['fk_user_id']);

        try
        {
        $stmt->execute();
            return "Cadatro realizado com sucesso";
        }
        catch(\Exception $e)
        {
            return $e->getMessage();
        }

        
    }


    public function select(int $id)
    {
        $conn = $this->connect();

        $sql = 'SELECT * FROM '.self::$table.' WHERE fk_user_id = :id ';

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        if($stmt->rowCount() > 0)
        {
            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            echo 'sucesso';
        }
        else
        {
            throw new \Exception("nenhum usuário encontrado!");
            echo 'error';
        }

    }

    public function deleteSupplier($id)
    {   

        if( !$this->selectById($id) )
        {
            return "Registro não encontrado";
        }

        $conn = $this->connect();
        $sql =  "DELETE FROM ".self::$table.' WHERE id = :id';

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $id);

        try
        {
            $stmt->execute();
            return "Registro deletado com sucesso";
        }
        catch(\Exception $e)
        {
            return $e->getMessage();
        }
       

    }

    public function selectById($id)
    {   
        $conn = $this->connect();

        $sql = 'SELECT * FROM '.self::$table.' WHERE id = :id ';

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        if($stmt->rowCount() > 0)
        {
            return true;
            
        }
        else
        {
           return false;
        }
    }

    public function update($data)
    {
        return "Update aqui";
    }


}