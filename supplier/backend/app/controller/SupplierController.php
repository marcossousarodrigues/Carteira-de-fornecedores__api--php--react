<?php

namespace app\controller;
use app\model\Supplier;

class SupplierController extends Supplier
{
    public function get($id)
    {
        $supplier  = $this->select($id);
        
        return $supplier;
    }

    public function post()
    {
        $supplier = json_decode(file_get_contents('php://input'), true);
        $data = $this->create($supplier);
        return $data;
    }

    public function put()
    {
        $supplier = json_decode(file_get_contents('php://input'), true);
        $data = $this->update($supplier);
        return $data;
    }

    public function delete($id)
    {
        
        $supplier = $this->deleteSupplier($id);
        return $supplier;
    }



}