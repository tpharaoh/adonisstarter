'use strict'
const User = use('App/Models/User')
const Device = use('App/Models/Device')

class DeviceController {

  async index ({ request, response, session,auth })
  {
    let devices =  Device.all();
    return devices;//auth.getUser();
  }
  async create ({ request, response, session,auth })
  {
    const { name} = request.all()
    let user = await auth.getUser();
    await user.devices().create({
      name: name,
      user_id: user.id
    });
    // let posted = await Device.create({
    //         name: name,
    //         user_id: user.id
    // });
    let devices =  Device.all();
    return devices;//auth.getUser();
  }
  async delete ({ request, response, session,params })
  {

    let device = await Device.find(params.id);
    // let user = await auth.getUser();
    await device.delete();
    // if(user.id==device.user_id){
      // await device.delete();
    //   session.flash({ message: 'Your job has been removed'});
    //   return response.redirect('back');
    // }

    let devices = await Device.all();
    return devices;//auth.getUser();
  }
}

module.exports = DeviceController
