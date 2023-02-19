import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateStoreComponent } from '../update-store/update-store.component';
import { AddStoreComponent } from '../add-store/add-store.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreserviceService {
  dataArray;

  constructor(private http: HttpClient) {}

  getAllStore() {
    return this.http.get('http://localhost:5000/getstore');
  }

  getDevices() {
    return this.http.get('http://localhost:5000/api/gettag');
  }
  getTemplate() {
    return this.http.get('http://localhost:5000/gettemplate');
  }
  addnewStore(profil: any) {
    return this.http.post('http://localhost:5000/addstore', profil);
  }

  addNewData(data1: any) {
    return this.http.post('http://localhost:5000/addproducts', data1);
  }
  addNewRole(role: any) {
    return this.http.post('http://localhost:5000/addrole', role);
  }
  addPermission(permission: any) {
    return this.http.post(
      'http://localhost:5000/api/addpermission',
      permission
    );
  }
  addStaff(staff: any) {
    return this.http.post('http://localhost:5000/addstaff', staff);
  }

  addgateway(newgateway: any) {
    return this.http.post('http://localhost:5000/addgateway', newgateway);
  }
  addDevice(newDevice: any) {
    return this.http.post('http://localhost:5000/api/addtag', newDevice);
  }
  addTemplate(newTemplate: any) {
    return this.http.post('http://localhost:5000/addtemplate', newTemplate);
  }

  getStaff() {
    return this.http.get('http://localhost:5000/getstaff');
  }

  getRole() {
    return this.http.get('http://localhost:5000/getrole');
  }
  getPermission() {
    return this.http.get('http://localhost:5000/api/getpermission');
  }
  getOperationRecord() {
    return this.http.get('http://localhost:5000/api/getrecord');
  }

  getproducts() {
    return this.http.get('http://localhost:5000/getproducts');
  }

  getsetting() {
    return this.http.get('http://localhost:5000/showversion');
  }
  getgateway() {
    return this.http.get('http://localhost:5000/getgetway');
  }
  deleteStaff(staff_id: any) {
    return this.http.delete('http://localhost:5000/deletestaff/' + staff_id);
  }
  deletePermission(permission_id: any) {
    return this.http.delete(
      'http://localhost:5000/api/deletepermission/' + permission_id
    );
  }
  deleteRole(role_id: any) {
    return this.http.delete('http://localhost:5000/deleterole/' + role_id);
  }
  deleteData(product_id: any) {
    return this.http.delete(
      'http://localhost:5000/deleteproduct/' + product_id
    );
  }
  deleteDevice(id: any) {
    return this.http.delete('http://localhost:5000/api/deletetag/' + id);
  }
  deleteGateway(id: any) {
    return this.http.delete('http://localhost:5000/deletegateway/' + id);
  }
  deleteTemplate(id: any) {
    return this.http.delete('http://localhost:5000/deletetemplate/' + id);
  }
  updateStore(id: any, newStore: any) {
    return this.http.put('http://localhost:5000/updatestore/' + id, newStore);
  }
  updateRole1(role_id: any, newRole: any) {
    return this.http.put(
      'http://localhost:5000/updaterole/' + role_id,
      newRole
    );
  }
  updatestaff(staff_id: any, newStaff: any) {
    return this.http.put(
      'http://localhost:5000/updatestaff/' + staff_id,
      newStaff
    );
  }
  updatepermission(permission_id: any, newPermission: any) {
    return this.http.put(
      'http://localhost:5000/api/updatepermission/' + permission_id,
      newPermission
    );
  }
  updategateway(id: any, newGateway: any) {
    return this.http.put(
      'http://localhost:5000/updategateway/' + id,
      newGateway
    );
  }
  updateDevice(id: any, newdevice: any) {
    return this.http.put(
      'http://localhost:5000/api/updatetag/' + id,
      newdevice
    );
  }
  updateData(id: any, newData: any) {
    return this.http.put('http://localhost:5000/updateproduct/' + id, newData);
  }
  getOneDevice(id: any) {
    return this.http.get('http://localhost:5000/api/gettag1/' + id);
  }
  updatedevice(id: any, newDevice: any) {
    return this.http.put(
      'http://localhost:5000/api/updatetag/' + id,
      newDevice
    );
  }
}
